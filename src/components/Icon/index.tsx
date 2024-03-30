import AddIcon from './Add';
import Checked from './Checked';
import TrashIcon from './Trash';
import UncheckedIcon from './Unchecked';

type IconProps = {
    icon: 'trash' | 'checked' | 'unchecked' | 'add'
}

export default function Icon({ icon }: IconProps) {
    const icons = {
        trash: <TrashIcon />,
        checked: <Checked />,
        unchecked: <UncheckedIcon />,
        add: <AddIcon />,
    }

    return icons[icon]
}
