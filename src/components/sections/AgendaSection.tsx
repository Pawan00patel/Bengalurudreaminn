import React from 'react';
import '../../styles/AgendaSection.css';

interface Session {
  time: string;
  title: string;
  speakers?: string[];
}

interface Track {
  name: string;
  sessions: Session[];
}

interface Day {
  day: string;
  tracks: Track[];
  closing: Session[];
}

const agendaData: Day[] = [
  {
    day: "DAY 1",
    tracks: [
      {
        name: "Techies Innovation",
        sessions: [
          { time: "9:30 AM - 10:45 AM", title: "Key Note" },
          {
            time: "11:00 AM - 11:40 AM",
            title: "Data Cloud Overview and Is it a right fit?",
            speakers: ["Durgesh Dhoot", "Deepthi Kamath"]
          },
          {
            time: "11:50 AM - 12:10 PM",
            title: "Discover new insights by Salesforce CRM Analytics",
            speakers: ["Ranjita Deepak"]
          },
          {
            time: "12:20 PM - 1:00 PM",
            title: "Demystifying Salesforce Marketing Cloud Growth Edition",
            speakers: ["Aishwarya TP"]
          },
          { time: "1:00 PM - 2:00 PM", title: "LUNCH" },
          {
            time: "2:00 PM - 3:30 PM",
            title: "Dev Code War",
            speakers: ["Gaurav Kheterpal", "Ashvin Bhatt"]
          },
        ],
      },
      {
        name: "AI / Low Code Hub",
        sessions: [
          { time: "9:30 AM - 10:45 AM", title: "Key Note" },
          {
            time: "11:00 AM - 11:40 AM",
            title: "Test-o-rama: Adventures in Salesforce Test Automation",
            speakers: ["Chandralekha Kapoor", "Robin Gupta"]
          },
          {
            time: "11:50 AM - 12:10 PM",
            title: "Unlocking Hidden Patterns: Event Monitoring Strategies for Salesforce Users",
            speakers: ["Kapil Batra"]
          },
          {
            time: "12:20 PM - 1:00 PM",
            title: "Getting GenAI and Low Code to transform your Salesforce test automation",
            speakers: ["Rukmangada Kandyala", "Ravi Nukala", "Naveen KumarBandi"]
          },
          { time: "1:00 PM - 2:00 PM", title: "LUNCH" },
          {
            time: "2:00 PM - 3:30 PM",
            title: "Low Code War",
            speakers: ["Kannan Narayanan", "Rupesh Bhatia"]
          },
        ],
      }
    ],
    closing: [
      { time: "3:30 PM - 3:50 PM", title: "HiTea" },
      {
        time: "3:50 PM - 4:10 PM",
        title: "Summer'24 Highlights",
        speakers: ["Vishwa Vikas Dagla"]
      },
      {
        time: "4:20 PM - 4:40 PM",
        title: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
        speakers: ["Rahul Malhotra"]
      },
      { time: "4:50 PM - 5:50 PM", title: "Fashion Show" },
      { time: "5:50 PM - 6:00 PM", title: "Closure" },
    ],
  },
  {
    day: "DAY 2",
    tracks: [
      {
        name: "Technical",
        sessions: [
          { time: "9:30 AM - 10:45 AM", title: "Panel Discussion" },
          {
            time: "11:00 AM - 11:40 AM",
            title: "Salesforce Anti-Pattern : Pitfalls Unveiled",
            speakers: ["Ashvin Bhatt"]
          },
          {
            time: "11:50 AM - 12:10 PM",
            title: "Amplify ALM with Scalability Products",
            speakers: ["Mayuresh Verma"]
          },
          {
            time: "12:20 PM - 1:00 PM",
            title: "Data Cloud Deep Dive \"An end to end implementation story\"",
            speakers: ["Aditya Naag Topalli"]
          },
          { time: "1:00 PM - 2:00 PM", title: "LUNCH" },
          {
            time: "2:00 PM - 3:30 PM",
            title: "Well Architected workshop by CTA",
            speakers: ["Ashvin Bhatt", "Bhaskar Vashishtha"]
          },
        ],
      },
      {
        name: "AI / Low Code",
        sessions: [
          { time: "9:30 AM - 10:45 AM", title: "Panel Discussion" },
          {
            time: "11:00 AM - 11:40 AM",
            title: "The Science of Prompt Engineering",
            speakers: ["Raghavendhra Yarlagadda"]
          },
          {
            time: "11:50 AM - 12:10 PM",
            title: "Pricing Guidance with Einstein Analytics",
            speakers: ["Vikram Karki"]
          },
          {
            time: "12:20 PM - 1:00 PM",
            title: "Unleash Your Inner Genius: Creating Your Own Einstein with GPT through Flows",
            speakers: ["Aman Tiwar"]
          },
          { time: "1:00 PM - 2:00 PM", title: "LUNCH" },
          {
            time: "2:00 PM - 3:30 PM",
            title: "Hands on Workshop - CTA Pathways: Salesforce Architect Scenario Exploration",
            speakers: ["Meera Nair", "Ranjini Janardhanan"]
          },
        ],
      }
    ],
    closing: [
      { time: "3:30 PM - 3:50 PM", title: "HiTea" },
      {
        time: "3:50 PM - 4:10 PM",
        title: "AppExchange Security Review Program",
        speakers: ["Hari Krishna M"]
      },
      {
        time: "4:20 PM - 4:40 PM",
        title: "Unlocking the Power of Visualization: Leveraging LWCs to Create Advanced Charts in CRM Analytics",
        speakers: ["Saagar Kinja"]
      },
      { time: "4:50 PM - 5:50 PM", title: "Fun Activity" },
      { time: "5:50 PM - 6:00 PM", title: "Closure" },
    ],
  }
];

const AgendaSection: React.FC = () => {
  return (
    <div className="agenda-container">
      <h1 className="agenda-title">Bengaluru Dreamin Agenda</h1>

      <nav className="agenda-nav">
        {agendaData.map((day) => (
          <a
            key={day.day}
            href={`#${day.day.toLowerCase().replace(' ', '-')}`}
          >
            {day.day}
          </a>
        ))}
      </nav>

      {agendaData.map((day) => (
        <section
          key={day.day}
          id={day.day.toLowerCase().replace(' ', '-')}
          className="agenda-day"
        >
          <h2 className="agenda-day-title">{day.day}</h2>

          <div className="agenda-tracks">
            {day.tracks.map((track) => (
              <div key={track.name} className="agenda-track-card">
                <h3 className="agenda-track-header">{track.name}</h3>
                <div className="agenda-sessions-list">
                  {track.sessions.map((session, index) => (
                    <div key={index} className="agenda-session">
                      <div className="session-time">{session.time}</div>
                      <div className="session-title">{session.title}</div>
                      {session.speakers && (
                        <div className="session-speakers">
                          Speakers: {session.speakers.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="closing-section">
            <h3 className="closing-title">Closing Sessions</h3>
            <div className="closing-card">
              {day.closing.map((session, index) => (
                <div key={index} className="closing-session">
                  <div className="session-time">{session.time}</div>
                  <div className="session-title">{session.title}</div>
                  {session.speakers && (
                    <div className="session-speakers">
                      Speakers: {session.speakers.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AgendaSection;
