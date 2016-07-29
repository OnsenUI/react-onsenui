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

  replace: ({routeConfig, data, options, key}) => {
    let config = {...routeConfig};

    // do not push keys twice
    if (key == null ||
      config.processStack.filter((el) => el.key === key).length === 0) {
      config.processStack.push({
        type: 'replace',
        data,
        options,
        key
      });
    }

    return config;
  },

  reset: ({routeConfig, data, options, key}) => {
    let config = {...routeConfig};

    // do not push keys twice
    if (key == null ||
      config.processStack.filter((el) => el.key === key).length === 0) {
      config.processStack.push({
        type: 'reset',
        data,
        options,
        key
      });
    }

    return config;
  },
  push: ({routeConfig, data, options, key}) => {
    let config = {...routeConfig};

    // do not push keys twice
    if (key == null ||
      config.processStack.filter((el) => el.key === key).length === 0) {
      config.processStack.push({
        type: 'push',
        data,
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
    let {data, type} = routeConfig.processStack.shift();

    console.log('type', type);

    if (type === 'push') {
      if (data != null) {
        config.routeStack.push(data);
      }
    } else if (type === 'reset') {
      if (!Array.isArray(data)) data = [data];
      config.routeStack = data;
    } else if (type === 'replace') {
      config.routeStack.pop();
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
