import { SidebarItemProps } from "./SidebarItem.types";

export default function SidebarItem(props: SidebarItemProps) {
    const { item } = props;
    const { href, icon, label } = item;

    return (
        <div>
            {label}
        </div>
    )
}
