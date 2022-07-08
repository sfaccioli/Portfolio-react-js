export function className(...classNames) {
  const classes = []

  for (const className of classNames) {
    classes.push(className)
  }

  return { className: classes.join(' ') }
}
