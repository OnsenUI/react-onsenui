/*
 * routeStack : [userRoute, userRoute2, ...]
 * processStack: [
 * { type: push| pop, data: userRoute },
 * { type: push| pop, data: userRoute2 },
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
  push: ({routeConfig, data, options, key}) => {
    let config = {...routeConfig};
    config.processStack.push({
      type: 'push',
      data,
      options,
      key
    });

    return config;
  },
  pop: ({routeConfig, options}) => {
    let config = {...routeConfig};
    config.processStack.push({
      type: 'pop',
      options
    });

    return config;
  },
  postPush: (routeConfig) => {
    let config = {...routeConfig};
    let {data} = routeConfig.processStack.shift();

    if (data != null) {
      config.routeStack.push(data);
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
