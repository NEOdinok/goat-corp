# Layouts Module

This module follows the Feature-Sliced Design (FSD) best practices for managing layout components in a front-end project.

## Best Practices

1. **Divide Layout into Two Modules:**
    - **Dumb Layout Grid (shared):** A purely presentational component that handles the layout structure.
    - **Smart Layout with Widgets:** This file contains the logic and integrates various widgets into the layout.

2. **Avoid Cross-Import Using Slot (Render Prop) Pattern:**
    - Pass widgets as props to the layout to maintain modularity and separation of concerns.

## Implementation

### Dumb Layout Grid (Shared)

This component is responsible for the layout structure and does not contain any business logic or state management.

```jsx
// Example of Dumb Layout Grid
// @/shared/ui/layout
export const Layout = ({
  navbarSlot,
  headerSlot,
  bottomSlot,
  announcementSlot,
  sidebarSlot,
}: Props) => {
  return (
    <div className={styles.root}>
      {announcementSlot}
      {navbarSlot}
      {headerSlot}
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
        {sidebarSlot && <aside className={styles.sidebar}>{sidebarSlot}</aside>}
      </div>
      {/* <footer className={styles.footer}></footer> */}
      {bottomSlot}
      <ScrollRestoration />
    </div>
  );
};

