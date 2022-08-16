import * as core from '@actions/core'
import * as github from '@actions/github'
import {removeIgnoreTaskLitsText} from './utils'

async function run(): Promise<void> {
    const body = github.context.payload.pull_request?.body

    if (!body) {
      return
    }
   
    const result = removeIgnoreTaskLitsText(body)
    const incompletedMatches = result.match(/(- \[[ ]\].+)/g);
    console.log({ incompletedMatches });
    const isTaskCompleted = incompletedMatches === null
    if (!isTaskCompleted) core.setFailed("Not all tasks completed")
}


run()
