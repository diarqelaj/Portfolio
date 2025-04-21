'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ABOUT_KEY = 'albert_portfolio_about';
const PROJECTS_KEY = 'albert_portfolio_projects';

function getInitialAbout() {
  return (
    typeof window !== 'undefined' && localStorage.getItem(ABOUT_KEY)) ||
      `Hi! I’m Albert Hajrizaj, a passionate fullstack developer with a frontend focus. I love crafting modern, accessible, and beautiful user interfaces using React, Next.js, and Tailwind CSS. My favorite part of coding is turning creative ideas into real products and collaborating with design/dev teams to deliver awesome results.`;
}
function getInitialProjects() {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(PROJECTS_KEY);
  if (stored) return JSON.parse(stored!);
  return [
    {
      title: 'Portfolio website (this one!)',
      description: 'A modern, editable developer portfolio using Next.js, Tailwind, shadcn/ui, and JSON storage.',
      link: '#',
      tech: ['Next.js', 'Tailwind', 'shadcn/ui'],
    },
  ];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [about, setAbout] = useState('');
  const [aboutSaved, setAboutSaved] = useState('');
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', link: '', tech: '' });
  const [formError, setFormError] = useState('');
  const [projectSaved, setProjectSaved] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem('albert_portfolio_admin') !== 'true') {
      router.push('/admin-login');
    } else {
      setAuthed(true);
      setAbout(getInitialAbout());
      setProjects(getInitialProjects());
    }
  }, [router]);

  function saveAbout() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ABOUT_KEY, about);
      setAboutSaved('About updated!');
      setTimeout(() => setAboutSaved(''), 2000);
    }
  }

  function saveProject(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) {
      setFormError('Title and description are required');
      return;
    }
    setFormError('');
    const next = [...projects];
    const techArr = form.tech
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t);
    if (editingProject === null) {
      next.push({ ...form, tech: techArr });
    } else {
      next[editingProject] = { ...form, tech: techArr };
    }
    setProjects(next);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
    setShowForm(false);
    setEditingProject(null);
    setProjectSaved('Project saved!');
    setTimeout(() => setProjectSaved(''), 2000);
    setForm({ title: '', description: '', link: '', tech: '' });
  }

  function startEdit(idx: number) {
    const proj = projects[idx];
    setForm({
      title: proj.title,
      description: proj.description,
      link: proj.link,
      tech: (proj.tech || []).join(', '),
    });
    setEditingProject(idx);
    setShowForm(true);
  }
  function deleteProject(idx: number) {
    if (window.confirm('Remove this project?')) {
      const next = projects.slice();
      next.splice(idx, 1);
      setProjects(next);
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
    }
  }

  if (!authed) return null;
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 flex flex-col items-center justify-center px-4 py-14">
      <div className="max-w-2xl w-full p-8 bg-zinc-900/95 border border-blue-900 rounded-2xl shadow-2xl animate-fade-in">
        <h1 className="text-2xl font-bold mb-4 text-blue-400 drop-shadow tracking-tight">Admin Dashboard</h1>
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-1 text-zinc-200">Edit About</h2>
          <textarea value={about} onChange={e => setAbout(e.target.value)} rows={4}
            className="w-full rounded bg-zinc-800 border border-zinc-700 p-2 text-zinc-100 font-mono focus:ring-blue-400 focus:ring-2 min-h-[96px]" />
          <button onClick={saveAbout} className="mt-2 px-4 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-900 focus:outline-none">Save</button>
          {aboutSaved && <span className="text-green-400 ml-4 font-mono">{aboutSaved}</span>}
        </section>
        <section className="mb-10">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-lg font-semibold text-zinc-200">Manage Projects</h2>
            <button onClick={()=>{setShowForm(true); setForm({title:'',description:'',link:'',tech:''}); setEditingProject(null);}} className="px-3 py-1 bg-blue-700 text-white font-semibold rounded hover:bg-blue-900">Add New</button>
          </div>
          <div>
            {projects.length === 0 ? (
              <div className="text-zinc-500 italic">No projects yet.</div>
            ) : (
              <ul className="space-y-3">
                {projects.map((proj, idx) => (
                  <li key={idx} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-zinc-100 truncate">{proj.title}</div>
                      <div className="text-zinc-400 text-sm truncate">{proj.description}</div>
                      <div className="text-xs text-blue-200 mt-1 font-mono truncate">{proj.link}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {(proj.tech || []).map((t: string) => (
                          <span key={t} className="px-2 py-0.5 bg-zinc-900 border border-blue-700 rounded text-blue-300 text-xs">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex gap-2">
                      <button onClick={()=>startEdit(idx)} className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-800 text-sm">Edit</button>
                      <button onClick={()=>deleteProject(idx)} className="px-2 py-1 bg-rose-600 text-white rounded hover:bg-rose-700 text-sm">Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {showForm && (
            <form className="mt-6 bg-zinc-950 border border-blue-900 rounded-xl p-6" onSubmit={saveProject}>
              <h3 className="text-zinc-100 font-semibold mb-2">{editingProject===null?'Add Project':'Edit Project'}</h3>
              <input required placeholder="Title" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))}
                className="w-full px-3 py-2 mb-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 font-mono" />
              <textarea required placeholder="Description" value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} rows={2}
                className="w-full px-3 py-2 mb-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 font-mono" />
              <input placeholder="Project Link (optional)" value={form.link} onChange={e=>setForm(f=>({...f,link:e.target.value}))}
                className="w-full px-3 py-2 mb-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 font-mono" />
              <input placeholder="Technologies (comma separated)" value={form.tech} onChange={e=>setForm(f=>({...f,tech:e.target.value}))}
                className="w-full px-3 py-2 mb-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 font-mono" />
              {formError && <div className="text-rose-400 text-sm font-mono mt-1 mb-2">{formError}</div>}
              <div className="flex gap-2 mt-4">
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 font-semibold">Save</button>
                <button type="button" onClick={()=>{setShowForm(false);setEditingProject(null); setForm({title:'',description:'',link:'',tech:''}) }} className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-900">Cancel</button>
              </div>
              {projectSaved && <span className="text-green-400 ml-4 font-mono">{projectSaved}</span>}
            </form>
          )}
        </section>
        <button onClick={()=>{localStorage.removeItem('albert_portfolio_admin');router.push('/');}} className="mt-6 px-3 py-1 bg-zinc-900 border border-blue-400 text-blue-300 rounded hover:bg-zinc-950 hover:text-white text-sm">Log Out</button>
      </div>
    </main>
  );
}
// ... existing code ... <nothing, this is the entire new file!>
