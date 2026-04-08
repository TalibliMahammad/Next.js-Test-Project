import { addTodo, deleteTodo, getTodos } from "../actions";
import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default async function TodoList() {
  // getTodos-un massiv qaytardığından əmin oluruq
  
  const rawTodos = await getTodos();
  const todos: Todo[] = Array.isArray(rawTodos) ? rawTodos : [];
  return (
    <div className="max-w-2xl mx-auto mt-16 p-1">
      <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl p-8 md:p-12">
        
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Gündəlik <span className="text-blue-600">Planlar</span>
          </h1>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Əsas Əlavə Etmə Forması */}
        <form action={addTodo} className="relative group mb-10">
          <input
            name="text"
            required
            placeholder="Bu gün nə etməlisiniz?.."
            className="w-full h-16 pl-6 pr-32 rounded-2xl bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-zinc-200 outline-none transition-all font-medium"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 h-12 px-6 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-none"
          >
            <Plus size={20} />
            <span className="hidden sm:inline">Əlavə et</span>
          </button>
        </form>

        <ul className="space-y-4">
          {todos.length === 0 ? (
            <div className="text-center py-10 text-slate-400 italic text-sm">
              Siyahı hələ ki boşdur.
            </div>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="group flex items-center justify-between p-5 bg-slate-50 dark:bg-zinc-800/50 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-slate-300">
                    {todo.completed ? (
                      <CheckCircle2 className="text-emerald-500" size={22} />
                    ) : (
                      <Circle size={22} />
                    )}
                  </div>
                  <span className={`text-slate-700 dark:text-zinc-200 font-semibold ${todo.completed ? 'line-through opacity-50' : ''}`}>
                    {todo.text}
                  </span>
                </div>

                {/* Silmə Forması - Button-u form daxilinə düzgün saldıq */}
                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <button
                    type="submit"
                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </form>
              </li>
            ))
          )}
        </ul>

        {todos.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2">
            <span>Cəmi: {todos.length} tapşırıq</span>
          </div>
        )}
      </div>
    </div>
  );
}