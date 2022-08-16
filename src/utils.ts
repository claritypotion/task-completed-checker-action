export function removeIgnoreTaskLitsText(text: string): string {
  return text.replace(
    /<!-- ignore-task-list-start -->[\s| ]*(- \[[x| ]\] .+[\s| ]*)+<!-- ignore-task-list-end -->/g,
    ''
  )
}

