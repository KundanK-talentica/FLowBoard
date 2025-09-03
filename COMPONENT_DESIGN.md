# High-Level Component Design for FlowBoard

## Component Hierarchy

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

## Component Responsibilities

- **App**: Root component. Manages the global state for all tasks, handles persistence to localStorage, and passes state and handlers to children.
- **Board**: Lays out the three columns side by side (33% width each).
- **Column**: Receives a list of tasks for its status, renders them vertically, and provides drop targets for drag-and-drop.
- **AddTaskForm**: Allows users to add a new task (title only) to the To Do column.
- **TaskCard**: Displays a task's title, provides move (drag or button) and delete actions, and handles drag events.

## State Management
- All tasks are stored in the App component's state as an array of objects, each with an id, title, and status ("todo", "inprogress", "done").
- State is updated via handler functions in App and persisted to localStorage on change.
- State is passed down to Board and then to Columns and TaskCards as needed.

## Drag-and-Drop Implementation
- Uses React's built-in drag-and-drop event handlers (onDragStart, onDragOver, onDrop, etc.).
- No external drag-and-drop libraries are used.
- TaskCard is draggable; Column is a drop target.
- On drop, the App updates the task's status in state.

---

This design ensures a clear separation of concerns, easy state management, and compliance with all technical constraints.
