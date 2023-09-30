import { CreationalConstants } from './design-patterns.contants';

export interface IDesignPatternsRoute {
  routeView: string;
  routePath: string;
}

export interface IDesignPatterns {
  patternType: string;
  patterns: IDesignPatternsRoute[];
}

class DesignPatternsRoute implements IDesignPatterns {
  patternType: string = '';
  patterns: IDesignPatternsRoute[] = [];

  setPatternType(type: string) {
    this.patternType = type;
    return this;
  }

  setViewAndRoute(routeView: string, routePath: string) {
    this.patterns.push({ routeView, routePath });
    return this;
  }

  getPatterns(): IDesignPatternsRoute[] {
    return this.patterns;
  }
}

class CreationalPattern extends DesignPatternsRoute implements IDesignPatterns {
  override patternType: string = 'Creational Design Pattern';
  override patterns: IDesignPatternsRoute[] = new DesignPatternsRoute()
    .setPatternType('Creational Design Pattern')
    .setViewAndRoute(
      CreationalConstants.ABSTRACT_FACTORY_ROUTE_NAME,
      CreationalConstants.ABSTRACT_FACTORY_VIEW_NAME
    )
    .setViewAndRoute(
      CreationalConstants.FACTORY_METHOD_ROUTE_NAME,
      CreationalConstants.FACTORY_METHOD_VIEW_NAME
    )
    .setViewAndRoute(
      CreationalConstants.BUILDER_VIEW_NAME,
      CreationalConstants.BUILDER_ROUTE_NAME
    )
    .setViewAndRoute(
      CreationalConstants.PROTOTYPE_ROUTE_NAME,
      CreationalConstants.PROTOTYPE_VIEW_NAME
    )
    .setViewAndRoute(
      CreationalConstants.SINGLETON_ROUTE_NAME,
      CreationalConstants.SINGLETON_VIEW_NAME
    )
    .getPatterns();
}
class StructuralPattern implements IDesignPatterns {
  patternType: string = 'Structural Design Pattern';
  patterns: IDesignPatternsRoute[] = [
    {
      routePath: 'creational-pattern/abstract-factory',
      routeView: 'Decorator Pattern',
    },
    {
      routePath: 'creational-pattern/factory-method',
      routeView: 'Adapter Pattern',
    },
    {
      routePath: 'creational-pattern/builder',
      routeView: 'Facade Pattern',
    },
    {
      routePath: 'creational-pattern/prototype',
      routeView: 'Bridge Pattern',
    },
    {
      routePath: 'creational-pattern/singleton',
      routeView: 'Composite',
    },
    {
      routePath: 'creational-pattern/abstract-factory',
      routeView: 'Flyweight Pattern',
    },
    {
      routePath: 'creational-pattern/factory-method',
      routeView: 'Proxy',
    },
  ];
}
class BehavioralPattern implements IDesignPatterns {
  patternType: string = 'Behavioral Design Pattern';
  patterns: IDesignPatternsRoute[] = [
    {
      routePath: 'creational-pattern/abstract-factory',
      routeView: 'Command',
    },
    {
      routePath: 'behavioral-pattern/chain-of-responsibility',
      routeView: 'Chain of Responsibility',
    },
    {
      routePath: 'creational-pattern/builder',
      routeView: 'Observer',
    },
    {
      routePath: 'creational-pattern/prototype',
      routeView: 'Interpreter',
    },
    {
      routePath: 'creational-pattern/singleton',
      routeView: 'Iterator',
    },
    {
      routePath: 'creational-pattern/abstract-factory',
      routeView: 'Mediator',
    },
    {
      routePath: 'creational-pattern/factory-method',
      routeView: 'Memento',
    },
    {
      routePath: 'creational-pattern/builder',
      routeView: 'State',
    },
    {
      routePath: 'creational-pattern/prototype',
      routeView: 'Strategy',
    },
    {
      routePath: 'creational-pattern/singleton',
      routeView: 'Template Method',
    },
    {
      routePath: 'creational-pattern/singleton',
      routeView: 'Visitor',
    },
  ];
}

export class DesignPatterns {
  patterns: IDesignPatterns[] = [
    new CreationalPattern(),
    new StructuralPattern(),
    new BehavioralPattern(),
  ];
}
