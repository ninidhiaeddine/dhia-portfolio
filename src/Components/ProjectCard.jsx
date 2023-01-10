import * as React from 'react';
import Chip from '@mui/material/Chip';
import { AiFillFolderOpen } from 'react-icons/ai';

export default function ProjectCard({ title, skills, description, link }) {
  return (
    <div class="flex justify-center">
      <div class="block rounded-lg shadow-lg bg-dark-purple max-w-sm text-center">
        <div class="pt-3 px-6">
          <AiFillFolderOpen className="h-10 w-10 text-primary" />
        </div>
        <div class="px-6 py-4">
          <p class="text-white text-left font-bold text-xl mb-2 h-[3.5rem]">{title}</p>
          <p class="text-white font-thin text-sm text-justify mb-4 h-[9rem]">
            {description}
          </p>
          <div className='flex gap-2'>
            {
              skills.map(x => {
                return <Chip label={x}  />
              })
            }
          </div>
        </div>
        <div class="py-3 px-6 text-gray-600">
          <a href={link}
            target="_blank"
            rel="noopener noreferrer">
            <button className='bg-dark-purple text-primary py-1 px-3 border border-primary rounded 
        hover:bg-primary hover:text-white hover:border-transparent hover:scale-110
        transition ease-in-out'>
              View Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}