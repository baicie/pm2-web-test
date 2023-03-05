import { defineProps, ExtractPropTypes, StyleValue } from "vue";
import { buildProps, definePropType } from "../../utils/props";

export const demo = buildProps({
  /**
   * @description CSS style
   */
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: "",
  },
} as const);

export type demo2 = ExtractPropTypes<typeof demo>;
