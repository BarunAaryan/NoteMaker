import React, { useState } from 'react';
import { Trash2, Edit3, Check } from 'lucide-react';

export default function NoteCard({ note, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    onUpdate(note._id, title, content);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`p-4 rounded-lg shadow-lg transition-all duration-200 ${note.color}`}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent border-none outline-none font-medium mb-2"
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-transparent border-none outline-none resize-none"
          rows={4}
          placeholder="Take a note..."
        />
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={handleSave}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Check size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ${note.color} group`}>
      <h3 className="font-medium mb-2">{note.title}</h3>
      <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
      <div className="flex justify-end gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <Edit3 size={20} />
        </button>
        <button
          onClick={() => onDelete(note._id)}
          className="p-2 hover:bg-black/5 rounded-full transition-colors text-red-500"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}