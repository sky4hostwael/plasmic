// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyzP6dbCdycwJpqiR2zkwe
// Component: MQ5YoyUM0K
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  SingleChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
} from "@plasmicapp/react-web";
import Select from "../../components/widgets/Select"; // plasmic-import: j_4IQyOWK2b/component
import Switch from "../../components/widgets/Switch"; // plasmic-import: b35JDgXpbiF/component
import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_docs_portal.module.css"; // plasmic-import: dyzP6dbCdycwJpqiR2zkwe/projectcss
import sty from "./PlasmicDocsPropsTableRow.module.css"; // plasmic-import: MQ5YoyUM0K/css

import ClosesvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__CloseSvg"; // plasmic-import: DhvEHyCHT/icon
import SearchsvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__SearchSvg"; // plasmic-import: R5DLz11OA/icon

export type PlasmicDocsPropsTableRow__VariantMembers = {
  controlType: "boolean" | "text" | "choice" | "renderable" | "object";
};

export type PlasmicDocsPropsTableRow__VariantsArgs = {
  controlType?: SingleChoiceArg<
    "boolean" | "text" | "choice" | "renderable" | "object"
  >;
};

type VariantPropType = keyof PlasmicDocsPropsTableRow__VariantsArgs;
export const PlasmicDocsPropsTableRow__VariantProps =
  new Array<VariantPropType>("controlType");

export type PlasmicDocsPropsTableRow__ArgsType = {
  propName?: React.ReactNode;
  description?: React.ReactNode;
  propType?: React.ReactNode;
  na?: React.ReactNode;
  jsonControl?: React.ReactNode;
};

type ArgPropType = keyof PlasmicDocsPropsTableRow__ArgsType;
export const PlasmicDocsPropsTableRow__ArgProps = new Array<ArgPropType>(
  "propName",
  "description",
  "propType",
  "na",
  "jsonControl"
);

export type PlasmicDocsPropsTableRow__OverridesType = {
  root?: p.Flex<"div">;
  textControl?: p.Flex<typeof Textbox>;
  switchControl?: p.Flex<typeof Switch>;
  text?: p.Flex<"div">;
  selectControl?: p.Flex<typeof Select>;
};

export interface DefaultDocsPropsTableRowProps {
  propName?: React.ReactNode;
  description?: React.ReactNode;
  propType?: React.ReactNode;
  na?: React.ReactNode;
  jsonControl?: React.ReactNode;
  controlType?: SingleChoiceArg<
    "boolean" | "text" | "choice" | "renderable" | "object"
  >;

  className?: string;
}

export const defaultDocsPropsTableRow__Args: Partial<PlasmicDocsPropsTableRow__ArgsType> =
  {};

function PlasmicDocsPropsTableRow__RenderFunc(props: {
  variants: PlasmicDocsPropsTableRow__VariantsArgs;
  args: PlasmicDocsPropsTableRow__ArgsType;
  overrides: PlasmicDocsPropsTableRow__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultDocsPropsTableRow__Args, props.args);
  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcontrolType_boolean]: hasVariant(
            variants,
            "controlType",
            "boolean"
          ),

          [sty.rootcontrolType_object]: hasVariant(
            variants,
            "controlType",
            "object"
          ),

          [sty.rootcontrolType_renderable]: hasVariant(
            variants,
            "controlType",
            "renderable"
          ),

          [sty.rootcontrolType_text]: hasVariant(
            variants,
            "controlType",
            "text"
          ),
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__psQVe, {
          [sty.freeBoxcontrolType_boolean__psQVeDvtp]: hasVariant(
            variants,
            "controlType",
            "boolean"
          ),

          [sty.freeBoxcontrolType_choice__psQVepr84S]: hasVariant(
            variants,
            "controlType",
            "choice"
          ),

          [sty.freeBoxcontrolType_renderable__psQVeHq8Xv]: hasVariant(
            variants,
            "controlType",
            "renderable"
          ),

          [sty.freeBoxcontrolType_text__psQVeYwHCt]: hasVariant(
            variants,
            "controlType",
            "text"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "select",
          value: args.propName,
          className: classNames(sty.slotTargetPropName, {
            [sty.slotTargetPropNamecontrolType_boolean]: hasVariant(
              variants,
              "controlType",
              "boolean"
            ),

            [sty.slotTargetPropNamecontrolType_choice]: hasVariant(
              variants,
              "controlType",
              "choice"
            ),

            [sty.slotTargetPropNamecontrolType_text]: hasVariant(
              variants,
              "controlType",
              "text"
            ),
          }),
        })}
      </div>

      <div
        className={classNames(projectcss.all, sty.freeBox__paNiv, {
          [sty.freeBoxcontrolType_boolean__paNivDvtp]: hasVariant(
            variants,
            "controlType",
            "boolean"
          ),

          [sty.freeBoxcontrolType_choice__paNivpr84S]: hasVariant(
            variants,
            "controlType",
            "choice"
          ),

          [sty.freeBoxcontrolType_renderable__paNivHq8Xv]: hasVariant(
            variants,
            "controlType",
            "renderable"
          ),

          [sty.freeBoxcontrolType_text__paNivYwHCt]: hasVariant(
            variants,
            "controlType",
            "text"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "select state",
          value: args.description,
        })}
      </div>

      <div
        className={classNames(projectcss.all, sty.freeBox__qqZw3, {
          [sty.freeBoxcontrolType_boolean__qqZw3Dvtp]: hasVariant(
            variants,
            "controlType",
            "boolean"
          ),

          [sty.freeBoxcontrolType_choice__qqZw3Pr84S]: hasVariant(
            variants,
            "controlType",
            "choice"
          ),

          [sty.freeBoxcontrolType_object__qqZw3Jj0Nv]: hasVariant(
            variants,
            "controlType",
            "object"
          ),

          [sty.freeBoxcontrolType_renderable__qqZw3Hq8Xv]: hasVariant(
            variants,
            "controlType",
            "renderable"
          ),

          [sty.freeBoxcontrolType_text__qqZw3YwHCt]: hasVariant(
            variants,
            "controlType",
            "text"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "string",
          value: args.propType,
          className: classNames(sty.slotTargetPropType, {
            [sty.slotTargetPropTypecontrolType_boolean]: hasVariant(
              variants,
              "controlType",
              "boolean"
            ),

            [sty.slotTargetPropTypecontrolType_renderable]: hasVariant(
              variants,
              "controlType",
              "renderable"
            ),

            [sty.slotTargetPropTypecontrolType_text]: hasVariant(
              variants,
              "controlType",
              "text"
            ),
          }),
        })}
      </div>

      {(
        hasVariant(variants, "controlType", "object")
          ? false
          : hasVariant(variants, "controlType", "renderable")
          ? true
          : hasVariant(variants, "controlType", "choice")
          ? true
          : hasVariant(variants, "controlType", "text")
          ? true
          : hasVariant(variants, "controlType", "boolean")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__b4Xu, {
            [sty.freeBoxcontrolType_boolean__b4XuDvtp]: hasVariant(
              variants,
              "controlType",
              "boolean"
            ),

            [sty.freeBoxcontrolType_choice__b4XUpr84S]: hasVariant(
              variants,
              "controlType",
              "choice"
            ),

            [sty.freeBoxcontrolType_object__b4XuJj0Nv]: hasVariant(
              variants,
              "controlType",
              "object"
            ),

            [sty.freeBoxcontrolType_renderable__b4Xuhq8Xv]: hasVariant(
              variants,
              "controlType",
              "renderable"
            ),

            [sty.freeBoxcontrolType_text__b4XuYwHCt]: hasVariant(
              variants,
              "controlType",
              "text"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "-",
            value: args.na,
            className: classNames(sty.slotTargetNa, {
              [sty.slotTargetNacontrolType_boolean]: hasVariant(
                variants,
                "controlType",
                "boolean"
              ),

              [sty.slotTargetNacontrolType_renderable]: hasVariant(
                variants,
                "controlType",
                "renderable"
              ),

              [sty.slotTargetNacontrolType_text]: hasVariant(
                variants,
                "controlType",
                "text"
              ),
            }),
          })}
        </div>
      ) : null}
      {(
        hasVariant(variants, "controlType", "renderable")
          ? true
          : hasVariant(variants, "controlType", "choice")
          ? true
          : hasVariant(variants, "controlType", "text")
          ? true
          : hasVariant(variants, "controlType", "boolean")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__sDmfW, {
            [sty.freeBoxcontrolType_boolean__sDmfWDvtp]: hasVariant(
              variants,
              "controlType",
              "boolean"
            ),

            [sty.freeBoxcontrolType_choice__sDmfWpr84S]: hasVariant(
              variants,
              "controlType",
              "choice"
            ),

            [sty.freeBoxcontrolType_renderable__sDmfWhq8Xv]: hasVariant(
              variants,
              "controlType",
              "renderable"
            ),

            [sty.freeBoxcontrolType_text__sDmfWYwHCt]: hasVariant(
              variants,
              "controlType",
              "text"
            ),
          })}
        >
          <Textbox
            data-plasmic-name={"textControl"}
            data-plasmic-override={overrides.textControl}
            className={classNames("__wab_instance", sty.textControl, {
              [sty.textControlcontrolType_text]: hasVariant(
                variants,
                "controlType",
                "text"
              ),
            })}
            placeholder={"Enter something here..." as const}
            prefixIcon={
              <SearchsvgIcon
                className={classNames(projectcss.all, sty.svg__e4RQx)}
                role={"img"}
              />
            }
            styleType={["bordered", "white"]}
            suffixIcon={
              <ClosesvgIcon
                className={classNames(projectcss.all, sty.svg__nG1SQ)}
                role={"img"}
              />
            }
            withIcons={[]}
          />
        </div>
      ) : null}
      {(
        hasVariant(variants, "controlType", "text")
          ? true
          : hasVariant(variants, "controlType", "boolean")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__m6QyJ, {
            [sty.freeBoxcontrolType_boolean__m6QyJDvtp]: hasVariant(
              variants,
              "controlType",
              "boolean"
            ),

            [sty.freeBoxcontrolType_choice__m6QyJpr84S]: hasVariant(
              variants,
              "controlType",
              "choice"
            ),

            [sty.freeBoxcontrolType_renderable__m6QyJhq8Xv]: hasVariant(
              variants,
              "controlType",
              "renderable"
            ),

            [sty.freeBoxcontrolType_text__m6QyJYwHCt]: hasVariant(
              variants,
              "controlType",
              "text"
            ),
          })}
        >
          <Switch
            data-plasmic-name={"switchControl"}
            data-plasmic-override={overrides.switchControl}
            className={classNames("__wab_instance", sty.switchControl, {
              [sty.switchControlcontrolType_boolean]: hasVariant(
                variants,
                "controlType",
                "boolean"
              ),
            })}
            name={"" as const}
            value={"" as const}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Enter some text"}
            </div>
          </Switch>
        </div>
      ) : null}
      {(
        hasVariant(variants, "controlType", "choice")
          ? true
          : hasVariant(variants, "controlType", "text")
          ? true
          : hasVariant(variants, "controlType", "boolean")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__koacm, {
            [sty.freeBoxcontrolType_boolean__koacmDvtp]: hasVariant(
              variants,
              "controlType",
              "boolean"
            ),

            [sty.freeBoxcontrolType_choice__koacmpr84S]: hasVariant(
              variants,
              "controlType",
              "choice"
            ),

            [sty.freeBoxcontrolType_object__koacmJj0Nv]: hasVariant(
              variants,
              "controlType",
              "object"
            ),

            [sty.freeBoxcontrolType_renderable__koacmHq8Xv]: hasVariant(
              variants,
              "controlType",
              "renderable"
            ),

            [sty.freeBoxcontrolType_text__koacmYwHCt]: hasVariant(
              variants,
              "controlType",
              "text"
            ),
          })}
        >
          <Select
            data-plasmic-name={"selectControl"}
            data-plasmic-override={overrides.selectControl}
            className={classNames("__wab_instance", sty.selectControl, {
              [sty.selectControlcontrolType_choice]: hasVariant(
                variants,
                "controlType",
                "choice"
              ),
            })}
            defaultValue={"value1" as const}
          />
        </div>
      ) : null}
      {(
        hasVariant(variants, "controlType", "object")
          ? true
          : hasVariant(variants, "controlType", "renderable")
          ? false
          : hasVariant(variants, "controlType", "choice")
          ? true
          : hasVariant(variants, "controlType", "text")
          ? true
          : hasVariant(variants, "controlType", "boolean")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__zpNw8, {
            [sty.freeBoxcontrolType_boolean__zpNw8Dvtp]: hasVariant(
              variants,
              "controlType",
              "boolean"
            ),

            [sty.freeBoxcontrolType_choice__zpNw8Pr84S]: hasVariant(
              variants,
              "controlType",
              "choice"
            ),

            [sty.freeBoxcontrolType_object__zpNw8Jj0Nv]: hasVariant(
              variants,
              "controlType",
              "object"
            ),

            [sty.freeBoxcontrolType_renderable__zpNw8Hq8Xv]: hasVariant(
              variants,
              "controlType",
              "renderable"
            ),

            [sty.freeBoxcontrolType_text__zpNw8YwHCt]: hasVariant(
              variants,
              "controlType",
              "text"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "null",
            value: args.jsonControl,
            className: classNames(sty.slotTargetJsonControl, {
              [sty.slotTargetJsonControlcontrolType_boolean]: hasVariant(
                variants,
                "controlType",
                "boolean"
              ),

              [sty.slotTargetJsonControlcontrolType_object]: hasVariant(
                variants,
                "controlType",
                "object"
              ),

              [sty.slotTargetJsonControlcontrolType_renderable]: hasVariant(
                variants,
                "controlType",
                "renderable"
              ),

              [sty.slotTargetJsonControlcontrolType_text]: hasVariant(
                variants,
                "controlType",
                "text"
              ),
            }),
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textControl", "switchControl", "text", "selectControl"],
  textControl: ["textControl"],
  switchControl: ["switchControl", "text"],
  text: ["text"],
  selectControl: ["selectControl"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  textControl: typeof Textbox;
  switchControl: typeof Switch;
  text: "div";
  selectControl: typeof Select;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocsPropsTableRow__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicDocsPropsTableRow__VariantsArgs;
  args?: PlasmicDocsPropsTableRow__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicDocsPropsTableRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicDocsPropsTableRow__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDocsPropsTableRow__ArgProps,
      internalVariantPropNames: PlasmicDocsPropsTableRow__VariantProps,
    });

    return PlasmicDocsPropsTableRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocsPropsTableRow";
  } else {
    func.displayName = `PlasmicDocsPropsTableRow.${nodeName}`;
  }
  return func;
}

export const PlasmicDocsPropsTableRow = Object.assign(
  // Top-level PlasmicDocsPropsTableRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textControl: makeNodeComponent("textControl"),
    switchControl: makeNodeComponent("switchControl"),
    text: makeNodeComponent("text"),
    selectControl: makeNodeComponent("selectControl"),

    // Metadata about props expected for PlasmicDocsPropsTableRow
    internalVariantProps: PlasmicDocsPropsTableRow__VariantProps,
    internalArgProps: PlasmicDocsPropsTableRow__ArgProps,
  }
);

export default PlasmicDocsPropsTableRow;
/* prettier-ignore-end */
