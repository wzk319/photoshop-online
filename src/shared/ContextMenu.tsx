import React from "react";
import styled from "styled-components";
import { ItemSetType, MenuItemType } from "../sections/menu/menu-items";
import ContextMenuItem from "./ContextMenuItem";

type StyledContextMenuProps = {
  position: Position;
};

const StyledContextMenu = styled.div`
  position: absolute;
  left: ${(props: StyledContextMenuProps) => {
    if (props.position === Position.BOTTOM_LEFT) return "0";
    else if (props.position === Position.TOP_RIGHT) return "100%";
    else throw new Error("Position Not Supported");
  }};
  top: ${(props: StyledContextMenuProps) => {
    if (props.position === Position.BOTTOM_LEFT) return "100%";
    else if (props.position === Position.TOP_RIGHT) return "0";
    else throw new Error("Position Not Supported");
  }};
`;

const Exit = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Menu = styled.div`
  position: relative;
  background-color: var(--panel);
  display: flex;
  flex-direction: column;
  border: solid 1px var(--menu-border);
  z-index: 2;
`;

const ItemSet = styled.div`
  padding-bottom: 1rem;
  border-bottom: solid 1px var(--disabled);
  margin-bottom: 1rem;
`;

export enum Position {
  TOP_RIGHT,
  BOTTOM_LEFT,
}

type Props = {
  open: boolean;
  close: () => void;
  itemSets: ItemSetType[];
  subMenu?: boolean;
  position?: Position;
};

const ContextMenu = (props: Props) => {
  if (!props.open) return null;

  return (
    <StyledContextMenu position={props.position || Position.TOP_RIGHT}>
      {!props.subMenu && <Exit onClick={() => props.close()} />}
      <Menu>
        {props.itemSets.map((itemSet: ItemSetType) => (
          <ItemSet>
            {itemSet.items.map((item: MenuItemType) => (
              <ContextMenuItem
                key={item.name}
                menuItem={item}
                close={() => props.close()}
              />
            ))}
          </ItemSet>
        ))}
      </Menu>
    </StyledContextMenu>
  );
};

export default ContextMenu;
