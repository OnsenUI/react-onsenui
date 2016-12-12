/*
 * routeStack : [userRoute, userRoute2, ...]
 * processStack: [
 * { type: push | pop | reset, route: userRoute },
 * { type: push | pop | reset, route: userRoute2 },
 * ...
 * ]
 */

export default {
  init: (routes) => {
    return {
      routeStack: routes,
      processStack: []
    };
  },

  replace: ({routeConfig, route, options, key}) => {
    let config = {...routeConfig};

    // do not push keys twice
    if (key == null ||
      config.processStack.filter((el) => el.key === key).length === 0) {
      config.processStack.push({
        type: 'replace',
        route,
        options,
        key
      });
    }

    return config;
  },

  reset: ({routeConfig, route, options, key}) => {
    let config = {...routeConfig};

    // do not push keys twice
    if (key == null ||
      config.processStack.filter((el) => el.key === key).length === 0) {
      config.processStack.push({
        type: 'reset',
        route,
        options,
        key
      });
    }

    return config;
  },

  push: ({routeConfig, route, options, key}) => {
    let config = {...routeConfig};

    // do not push keys twice
    if (key == null ||
      config.processStack.filter((el) => el.key === key).length === 0) {
      config.processStack.push({
        type: 'push',
        route,
        options,
        key
      });
    }

    return config;
  },

  pop: ({routeConfig, options, key}) => {
    let config = {...routeConfig};
    config.processStack.push({
      type: 'pop',
      key,
      options
    });

    return config;
  },

  postPush: (routeConfig) => {
    let config = {...routeConfig};
    let {route, type} = routeConfig.processStack.shift();

    if (type === 'push') {
      if (route != null) {
        config.routeStack.push(route);
      }
    } else if (type === 'reset') {
      if (!Array.isArray(route)) route = [route];
      config.routeStack = route;
    } else if (type === 'replace') {
      config.routeStack.pop();
      config.routeStack.push(route);
    }

    return config;
  },

  postPop: (routeConfig) => {
    let config = {...routeConfig};
    routeConfig.processStack.shift();
    routeConfig.routeStack.pop();

    return config;
  }
};
