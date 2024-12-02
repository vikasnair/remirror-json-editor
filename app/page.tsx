'use client';

import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(() => import('./components/RemirrorEditor'), {
  ssr: false,
})

const EditorPage = () => {
  return (
    <div>
      <h1>Remirror Markdown Editor with JSON Output</h1>
      <DynamicEditor />
    </div>
  );
};

 


export default EditorPage;