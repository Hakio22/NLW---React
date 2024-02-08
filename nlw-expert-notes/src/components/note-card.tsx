export function NoteCard() {
    return(
        <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-line-400'>
          <span className='text-sm font-medium text-slate-300'>
            há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident alias optio voluptate vitae distinctio accusamus repellat voluptatem, beatae esse itaque aut laboriosam nam nobis, animi ipsum odit, aperiam quam repudiandae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ab quod id omnis consequuntur! Beatae sequi quia asperiores quos cum at provident illum impedit animi nihil fugiat id, qui dolores!
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    )
}