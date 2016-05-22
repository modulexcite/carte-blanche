import BooleanControl from './base/BooleanControl';
import IntegerControl from './base/IntegerControl';
import ArrayControl from './base/ArrayControl';
import StringControl from './base/StringControl';
import EnumControl from './base/EnumControl';
import NodeControl from './base/NodeControl';
import FlowObjectControl from './base/FlowObjectControl';
import ObjectControl from './base/ObjectControl';
import FlowArrayControl from './base/FlowArrayControl';
import FlowUnionControl from './base/FlowUnionControl';

import AvatarControl from './advanced/AvatarControl';

const defaultControls = {
  // Basic
  bool: {
    control: BooleanControl,
    nested: false,
  },
  boolean: {
    control: BooleanControl,
    nested: false,
  },
  number: {
    control: IntegerControl,
    nested: false,
  },
  string: {
    control: StringControl,
    nested: false,
  },
  node: {
    control: NodeControl,
    nested: false,
  },
  enum: {
    control: EnumControl,
    nested: true,
  },
  arrayOf: {
    control: ArrayControl,
    nested: true,
  },
  Array: {
    control: FlowArrayControl,
    nested: true,
  },
  shape: {
    control: ObjectControl,
    nested: true,
  },
  // Flow specific
  signature: {
    control: FlowObjectControl,
    nested: true,
  },
  union: {
    control: FlowUnionControl,
    nested: true,
  },
  // Advanced
  avatar: {
    control: AvatarControl,
    nested: false,
  },
};

export default defaultControls;
