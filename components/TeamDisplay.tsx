import React, { useState, useMemo } from 'react';
import { TEAMS } from '../constants';
import { Member } from '../types';

const GitHubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);

const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

interface TeamCardProps {
  member: Member;
  index: number;
  isLead?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index, isLead = false }) => {
  return (
    <div
      className={`group relative text-center p-6 rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up opacity-0 ${isLead ? 'w-full max-w-sm mx-auto' : 'w-full max-w-sm mx-auto'}`}
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: 'forwards',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(66, 133, 244, 0.2), transparent 70%)'
      }}></div>

      <div className="relative w-80 h-80 mx-auto mb-4">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-google-blue via-google-red to-google-yellow transition-transform duration-500 group-hover:scale-105"></div>
        <img
          src={member.imageUrl}
          alt={member.name}
          className="relative w-full h-full rounded-full object-cover border-4 border-white/20 dark:border-slate-950/40"
        />
      </div>
      
      <h3 className="relative text-xl font-bold text-slate-800 dark:text-white">{member.name}</h3>
      <p className="relative text-google-blue font-mono">{member.role}</p>
      
      <div className="relative mt-4 flex justify-center space-x-4">
        {member.socials?.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`} className="text-slate-500 dark:text-slate-400 hover:text-google-blue dark:hover:text-google-blue transition-all duration-300 transform hover:scale-110">
            <LinkedInIcon />
          </a>
        )}
        {member.socials?.github && (
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`} className="text-slate-500 dark:text-slate-400 hover:text-google-blue dark:hover:text-google-blue transition-all duration-300 transform hover:scale-110">
            <GitHubIcon />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamDisplay: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState(TEAMS[0].name);

  const currentTeam = useMemo(() => {
    return TEAMS.find(team => team.name === selectedTeam);
  }, [selectedTeam]);

  // Special handling for Organizer Team and Technical Team
  const isOrganizerTeam = selectedTeam === 'Organizer Team';
  const isTechnicalTeam = selectedTeam === 'Technical Team';
  
  const teamLead = isOrganizerTeam 
    ? currentTeam?.members.find(m => m.role.toLowerCase().includes('faculty coordinator'))
    : isTechnicalTeam
    ? currentTeam?.members.find(m => m.role.toLowerCase().includes('technical lead'))
    : currentTeam?.members.find(m => m.role.toLowerCase().includes('lead') && !m.role.toLowerCase().includes('co-'));
    
  const coLeader = isOrganizerTeam
    ? currentTeam?.members.find(m => m.role.toLowerCase().includes('organizer') && !m.role.toLowerCase().includes('co-'))
    : isTechnicalTeam
    ? currentTeam?.members.find(m => m.role.toLowerCase().includes('technical vice-lead'))
    : currentTeam?.members.find(m => m.role.toLowerCase().includes('co-leader'));
    
  const teamMembers = isOrganizerTeam
    ? currentTeam?.members.filter(m => m.role.toLowerCase().includes('co-organizer'))
    : isTechnicalTeam
    ? currentTeam?.members.filter(m => m.role.toLowerCase().includes('technical member'))
    : currentTeam?.members.filter(m => 
        !m.role.toLowerCase().includes('lead') || m.role.toLowerCase().includes('co-leader')
      ).filter(m => !m.role.toLowerCase().includes('co-leader'));

  return (
    <div id="teams" className="container mx-auto pt-16 md:pt-24 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Meet The <span className="text-google-blue">Team</span>
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
        The driving force behind our community. A passionate group of students dedicated to learning, sharing, and building together.
      </p>

      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-16">
        {TEAMS.map(team => (
          <button
            key={team.name}
            onClick={() => setSelectedTeam(team.name)}
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300
              ${selectedTeam === team.name
                ? 'bg-google-blue text-white shadow-lg shadow-google-blue/30'
                : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
          >
            {team.name}
          </button>
        ))}
      </div>

      <div key={selectedTeam} className="space-y-16">
        {/* Team Lead and Co-Leader together */}
        {(teamLead || coLeader) && (
          <div className="text-center animate-fade-in-up">
             <h3 className="text-2xl font-bold mb-6 text-slate-700 dark:text-slate-300 tracking-wider uppercase">Leadership</h3>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
               {teamLead && <TeamCard member={teamLead} index={0} isLead={true} />}
               {coLeader && <TeamCard member={coLeader} index={1} isLead={true} />}
             </div>
          </div>
        )}
        
        {/* Team Members */}
        {teamMembers && teamMembers.length > 0 && (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-slate-700 dark:text-slate-300 tracking-wider uppercase">Members</h3>
            <div className={`grid gap-8 ${
              teamMembers.length === 1 
                ? 'grid-cols-1 justify-items-center' 
                : teamMembers.length === 2 
                ? 'grid-cols-1 sm:grid-cols-2 justify-items-center' 
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {teamMembers.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index + (teamLead ? 1 : 0) + (coLeader ? 1 : 0)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamDisplay;