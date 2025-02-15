import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/notes';

const colors = [
  'bg-white',
  'bg-red-100',
  'bg-yellow-100',
  'bg-green-100',
  'bg-blue-100',
  'bg-purple-100',
];

export function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async (title, content) => {
    try {
      const response = await axios.post(API_URL, {
        title,
        content,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      setNotes((prevNotes) => [response.data, ...prevNotes]);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const updateNote = async (id, title, content) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, {
        title,
        content,
      });
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? response.data : note
        )
      );
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return {
    notes,
    createNote,
    updateNote,
    deleteNote,
  };
}