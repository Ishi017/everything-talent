// src/@types/radix-ui__react-navigation-menu.d.ts

declare module '@radix-ui/react-navigation-menu' {
  import * as React from 'react';

  // Declare each component with a generic type
  export const Root: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLElement>> & React.RefAttributes<HTMLElement>
  >;

  export const List: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLUListElement>> & React.RefAttributes<HTMLUListElement>
  >;

  export const Item: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLLIElement>> & React.RefAttributes<HTMLLIElement>
  >;

  export const Trigger: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLButtonElement>> & React.RefAttributes<HTMLButtonElement>
  >;

  export const Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>
  >;

  export const Viewport: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>
  >;

  export const Link: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.AnchorHTMLAttributes<HTMLAnchorElement>> & React.RefAttributes<HTMLAnchorElement>
  >;

  export const Indicator: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>
  >;
}
