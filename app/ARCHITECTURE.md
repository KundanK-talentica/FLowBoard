# ARCHITECTURE.md

## Architectural Pattern
- **Component-based architecture** using React functional components and hooks.
- State is managed in the root `App` component and passed down via props.

## Component Hierarchy Diagram

```
App
│
└── Board
    ├── Column (To Do)
    │   └── AddTaskForm
    │   └── TaskCard (xN)
    ├── Column (In Progress)
    │   └── TaskCard (xN)
    └── Column (Done)
        └── TaskCard (xN)
```

## State Management
- All tasks are stored in the `App` component's state as an array of objects: `{ id, title, status }`.
- State is updated via handler functions and persisted to localStorage.
- State is passed down to child components via props.

## Drag-and-Drop Implementation
- Uses React's built-in drag-and-drop event handlers (`onDragStart`, `onDragOver`, `onDrop`).
- No external drag-and-drop libraries are used.
- TaskCard is draggable; Column is a drop target.
- On drop, the App updates the task's status in state.

## Rationale
- Simplicity, transparency, and full control over state and UI logic.
- Meets all technical constraints and assignment requirements.
