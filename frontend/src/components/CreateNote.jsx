import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function CreateNote({ onCreateNote }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreateNote(title, content);
      setTitle('');
      setContent('');
      setIsExpanded(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-4 transition-all duration-200"
      >
        {isExpanded && (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border-none outline-none font-medium mb-2"
          />
        )}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onClick={() => setIsExpanded(true)}
          placeholder="Take a note..."
          rows={isExpanded ? 4 : 1}
          className="w-full border-none outline-none resize-none"
        />
        {isExpanded && (
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Create Note
            </button>
          </div>
        )}
      </form>
    </div>
  );
}