import { HostConfig } from 'react-reconciler';

import { Container } from './container';
import { Dot } from './dot';

const noop = (): void => { };

type Type = 'Container' | 'Dot';
type Props = {
  readonly index: number,
  readonly data: number,
}
type Instance = Dot;
type TextInstance = never;
type SuspenseInstance = null;
type HydratableInstance = null;
type PublicInstance = Instance;
type HostContext = null;
type UpdatePayload = Props;
type ChildSet = unknown;
type TimeoutHandle = ReturnType<typeof setTimeout>;
type NoTimeout = -1

export const hostConfig: HostConfig<
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  SuspenseInstance,
  HydratableInstance,
  PublicInstance,
  HostContext,
  UpdatePayload,
  ChildSet,
  TimeoutHandle,
  NoTimeout
> = {
  isPrimaryRenderer: true,
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  finalizeInitialChildren: () => false,
  shouldSetTextContent: () => false,
  getPublicInstance: (instance: Instance) => instance,
  getChildHostContext: () => null,
  getRootHostContext: () => null,
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  prepareForCommit: () => null,
  preparePortalMount: () => null,
  resetAfterCommit: noop,
  queueMicrotask: noop,
  noTimeout: -1,
  now: Date.now,

  createInstance: (type, props, container) => {
    const instance = new Dot(props.index, props.data, container);
    return instance;
  },

  createTextInstance: (text, _container) => {
    throw new Error();
  },

  appendInitialChild: (parent, child) => {
    return;
  },

  appendChild: (parent, child) => {
    return;
  },

  removeChild: (parent, child) => {
    return;
  },

  prepareUpdate: (
    _instance: Instance,
    _type: Type,
    _oldProps: Props,
    newProps: Props,
  ) => {
    return newProps;
  },

  commitUpdate: (instance, updatePayload) => {
    instance.update(updatePayload.data, updatePayload.index);
    instance.container.$render();
  },

  appendChildToContainer: (container, instance) => {
    container.add(instance);
    container.$render();
  },

  removeChildFromContainer: (container, instance) => {
    if (instance == null || container == null) return;
    container.remove(instance)
    container.$render();
  },

  clearContainer: (container) => {
    container.$clear();
  }
}
