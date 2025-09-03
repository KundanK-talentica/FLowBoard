# FlowBoard Project Specification

## Vision
FlowBoard is a lightweight Kanban board application inspired by Trello, designed to help engineers focus on state management, design trade-offs, and AI-native development practices. The application provides a simple, interactive task management experience with a fixed three-column layout and local persistence.

## Functional Requirements
- **Columns:** Three fixed columns – To Do, In Progress, Done.
- **Add Task:** Users can add a task (title only) to the To Do column.
- **Move Task:** Tasks can be moved between columns (via drag-and-drop or buttons).
- **Delete Task:** Users can delete a task from any column.
- **Task State:** All tasks are managed in component state.
- **Persistence:** Use localStorage for saving and loading tasks. No backend/API integration.

## UI Layout Requirements
- **Three-column layout:**
  - Left (33%): To Do column – add new tasks here.
  - Middle (33%): In Progress column.
  - Right (33%): Done column.
- Each column displays its tasks vertically.
- Tasks are interactive (move/delete).

## Technical Constraints & Rules
- No external drag-and-drop libraries (e.g., react-dnd, interact.js, konva.js).
- Must use only core features of React, Angular, Vue, or React Native.
- Code must compile and run locally using `npm run start`.
- The app must not depend on any external API.

## Deliverables
- `README.md`: Clear build/run instructions.
- `PROJECT_STRUCTURE.md`: Explanation of folder/module layout.
- `ARCHITECTURE.md`:
  - Chosen architectural pattern.
  - Component hierarchy diagram.
  - State management explanation.
  - Rationale for drag-and-drop implementation.
- `CHAT_HISTORY.md`: Prompt logs with coding assistant, including iterations and trade-offs.

---

# High-Level Component Design

## Main Components
- **App**: Root component, manages global state and layout.
- **Board**: Contains and arranges the three columns.
- **Column**: Represents a single column (To Do, In Progress, Done), displays tasks vertically.
- **TaskCard**: Represents an individual task, supports move and delete actions.
- **AddTaskForm**: Input for adding new tasks to the To Do column.

## State Management
- All tasks are stored in the App component's state and persisted to localStorage.
- State is passed down to child components via props.
- Task movement and deletion are handled by updating the state in App.

## Drag-and-Drop
- Implemented using React's core event handlers (onDragStart, onDragOver, onDrop, etc.), not external libraries.

---

Development will proceed with this structure and requirements in mind.
