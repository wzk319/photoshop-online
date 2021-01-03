import { edit } from "./edit";
import { file } from "./file";

export type ItemType = {
  name: string;
  itemSets?: ItemSetType[];
  action?: () => void;
};

export type ItemSetType = {
  items: ItemType[];
};

export type MenuItemType = {
  name: string;
  itemSets: ItemSetType[];
};

export const menuItems: MenuItemType[] = [
  file,
  edit,
  {
    name: "Image",
    itemSets: [
      {
        items: [
          {
            name: "Mode",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Adjustments",
            itemSets: [
              {
                items: [
                  {
                    name: "Brightness/Contrast...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Levels...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Curves...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Exposure...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Vibrance...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Hue/Saturation...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Color Balance...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Black & White...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Photo Filter...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Channel Mixer...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Color Lookup...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Invert",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Posterize...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Threshold...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Gradient Map...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Selective Color...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Shadows/Highlights...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "HDR Toning...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Desaturate",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Match Color...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Replace Color...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Equalize",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Auto Tone",
            action: () => console.log("meow"),
          },
          {
            name: "Auto Contrast",
            action: () => console.log("meow"),
          },
          {
            name: "Auto Color",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Image Size...",
            action: () => console.log("meow"),
          },
          {
            name: "Canvas Size...",
            action: () => console.log("meow"),
          },
          {
            name: "Image Rotation",
            itemSets: [
              {
                items: [
                  {
                    name: "180°",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "90° Clockwise",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "90° Counter Clockwise",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Flip Canvas Horizontal",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Flip Canvas Vertical",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Crop",
            action: () => console.log("meow"),
          },
          {
            name: "Trim...",
            action: () => console.log("meow"),
          },
          {
            name: "Reveal All",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Duplicate...",
            action: () => console.log("meow"),
          },
          {
            name: "Apply Image...",
            action: () => console.log("meow"),
          },
          {
            name: "Calculations...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Variables",
            itemSets: [
              {
                items: [
                  {
                    name: "Define...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Data Sets...",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Apply Data Set...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Trap...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Analysis",
            itemSets: [
              {
                items: [
                  {
                    name: "Set Measurement Scale",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Select Data Points",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Record Measurements",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Ruler Tool",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Count Tool",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Place Scale Marker...",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Layer",
    itemSets: [
      {
        items: [
          {
            name: "New",
            itemSets: [
              {
                items: [
                  {
                    name: "Layer...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Layer from Background...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Group...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Group from Layers...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Artboard...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Artboard from Group...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Artboard from Layers...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Frame from Layers...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Convert to Frame",
                    action: () => console.log("meow"),
                  },
                ],
              },

              {
                items: [
                  {
                    name: "Layer Via Copy",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Layer Via Cut",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Copy CSS",
            action: () => console.log("meow"),
          },
          {
            name: "Copy SVG",
            action: () => console.log("meow"),
          },
          {
            name: "Duplicate Layer...",
            action: () => console.log("meow"),
          },
          {
            name: "Delete",
            itemSets: [
              {
                items: [
                  {
                    name: "Layer",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Hidden Layers",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Quick Export as PNG",
            action: () => console.log("meow"),
          },
          {
            name: "Export As...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Rename Layer...",
            action: () => console.log("meow"),
          },
          {
            name: "Layer Style",
            itemSets: [
              {
                items: [
                  {
                    name: "Blending Options...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Bevel & Emboss...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Stroke...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Inner Shadow...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Inner Glow...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Satin...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Color Overlay..",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Gradient Overlay...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Pattern Overlay...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Outer Glow...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Drop Shadow...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Copy Layer Style",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Paste Layer Style",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Clear Layer Style",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Global Light...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Create Layer",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Hide All Effects",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Scale Effects...",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Smart Filter",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "New Fill Layer",
            itemSets: [
              {
                items: [
                  {
                    name: "Solid Color...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Gradient...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Pattern..",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "New Adjustment Layer",
            itemSets: [
              {
                items: [
                  {
                    name: "Brightness/Contrast...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Levels...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Curves...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Exposure...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Vibrance...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Hue/Saturation...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Color Balance...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Black & White...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Photo Filter...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Channel Mixer...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Color Lookup...",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Invert",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Posterize...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Threshold...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Gradient Map...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Selective Color...",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Layer Content Options...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Layer Mask",
            itemSets: [],
          },
          {
            name: "Vector Mask",
            itemSets: [],
          },
          {
            name: "Create Clipping Mask",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Smart Objects",
            itemSets: [],
          },
          {
            name: "Video Layers",
            itemSets: [],
          },
          {
            name: "Rasterize",
            itemSets: [],
          },
        ],
      },
      {
        items: [
          {
            name: "New Layer Based Slice",
            itemSets: [],
          },
        ],
      },
      {
        items: [
          {
            name: "Group Layers",
            action: () => console.log("meow"),
          },
          {
            name: "Ungroup Layers",
            action: () => console.log("meow"),
          },
          {
            name: "Hide Layers",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Arrange",
            itemSets: [],
          },
          {
            name: "Combine Shapes",
            itemSets: [],
          },
        ],
      },
      {
        items: [
          {
            name: "Align Layers to Selection",
            itemSets: [],
          },
          {
            name: "Distribute",
            itemSets: [],
          },
        ],
      },
      {
        items: [
          {
            name: "Lock Layers...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Link Layers",
            action: () => console.log("meow"),
          },
          {
            name: "Select Linked Layers",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Merge Down",
            action: () => console.log("meow"),
          },
          {
            name: "Merge Visible",
            action: () => console.log("meow"),
          },
          {
            name: "Flatten Image",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Matting",
            itemSets: [],
          },
        ],
      },
    ],
  },
];
