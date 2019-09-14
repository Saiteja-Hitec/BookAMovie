import { Component, EventEmitter } from '@angular/core';

export function MockComponent(options: Component): Component {
  const metadata: Component = {
    selector: options.selector,
    inputs: options.inputs,
    outputs: options.outputs || [],
    template: options.template || '',
    exportAs: options.exportAs || ''
  };

  class Mock {}

  metadata.outputs.forEach(item => {
    Mock.prototype[item] = new EventEmitter<any>();
  });

  return Component(metadata)(Mock as any);
}
