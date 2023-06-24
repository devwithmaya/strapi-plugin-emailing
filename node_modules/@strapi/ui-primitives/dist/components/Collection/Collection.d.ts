/**
 * An internal fork of Radix UI's `Collection` component.
 *
 * We've added a subscription API to allow us to subscribe to changes in the collection via the useCollection hook.
 */
import * as React from 'react';
import type * as Radix from '@radix-ui/react-primitive';
import { Slot } from '@radix-ui/react-slot';
type SlotProps = Radix.ComponentPropsWithoutRef<typeof Slot>;
interface CollectionProps extends SlotProps {
    scope: any;
}
declare function createCollection<ItemElement extends HTMLElement, ItemData = {}>(name: string): readonly [{
    readonly Provider: React.FC<{
        children?: React.ReactNode;
        scope: any;
    }>;
    readonly Slot: React.ForwardRefExoticComponent<CollectionProps & React.RefAttributes<HTMLElement>>;
    readonly ItemSlot: React.ForwardRefExoticComponent<React.PropsWithoutRef<ItemData & {
        children: React.ReactNode;
        scope: any;
    }> & React.RefAttributes<ItemElement>>;
}, (scope: any) => {
    getItems: () => ({
        ref: React.RefObject<ItemElement>;
    } & ItemData)[];
    subscribe: (listener: (newState: ({
        ref: React.RefObject<ItemElement>;
    } & ItemData)[], prevState: ({
        ref: React.RefObject<ItemElement>;
    } & ItemData)[]) => void) => () => boolean;
}, import("@radix-ui/react-context").CreateScope];
export { createCollection };
export type { CollectionProps };
