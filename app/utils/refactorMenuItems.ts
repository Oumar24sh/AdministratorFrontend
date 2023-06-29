export function filterMenuByPermissions(user, menuList) {
  if (!user && !menuList) {
    return [];
  }
  const userPermissions = user?.userClaims && user.rolesClaims && [...user?.userClaims, ...user.rolesClaims]?.map(
    (item) => ({
      key: item.type,
      operation: item.value,
    })
  );

  function filterChildren(children) {
    return children.filter((child) => {
      if (!child.permission) {
        return true;
      } else if (child.permission && child.permission.length > 0) {
        return child.permission.some((permission) =>
          userPermissions?.some(
            (userPermission) =>
              userPermission.key === permission.key &&
              userPermission.operation === permission.operation
          )
        );
      } else if (child.children && child.children.length > 0) {
        child.children = filterChildren(child.children);
        return child.children.length > 0;
      }

      return true;
    });
  }

  const filteredMenu = menuList.map((menu) => {
    const hasPermission = !menu?.permission ||  menu?.permission?.some((permission) =>
      userPermissions?.some(
        (userPermission) =>
          userPermission.key === permission.key &&
          userPermission.operation === permission.operation
      )
    );
    if (hasPermission) {
      const filteredChildren = filterChildren(menu.children);
      return {
        ...menu,
        children: filteredChildren,
      };
    }
  });

  return filteredMenu.filter((item) => item);
}
