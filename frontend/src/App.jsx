import React from 'react';
import { StickyNote } from 'lucide-react';
import CreateNote from './components/CreateNote';
import NoteCard from './components/NoteCard';
import { useNotes } from './hooks/useNotes';

function App() {
  const { notes, createNote, updateNote, deleteNote } = useNotes();

  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <StickyNote className="h-8 w-8 text-yellow-500" />
              <h1 className="ml-2 text-xl font-semibold text-gray-900">Note Maker</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CreateNote onCreateNote={createNote} />
        
        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onUpdate={updateNote}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;