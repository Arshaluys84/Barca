export const updateArrayProps = (items, ArrayId, propsArrayId, ObjectProps) => {
  return items.map(u => {
    if (u[ArrayId] === propsArrayId) {
      return { ...u, ...ObjectProps }
    }
    return u;
  })
}


