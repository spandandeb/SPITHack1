import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Megaphone, 
  TicketCheck, 
  Settings, 
  Play, 
  BarChart, 
  CheckCircle2, 
  PlusCircle 
} from 'lucide-react';

const EventManagementDashboard = () => {
  const [stages, setStages] = useState([
    { 
      name: 'Event Planning', 
      status: 'pending', 
      details: 'Define event objectives, theme, and initial budget',
      tasks: [
        'Brainstorm event concept',
        'Set preliminary budget',
        'Define target audience'
      ]
    },
    { 
      name: 'Team Formation', 
      status: 'pending', 
      details: 'Recruit and assign roles to event organization team',
      tasks: [
        'Identify key team leads',
        'Assign departmental responsibilities',
        'Conduct team orientation'
      ]
    },
    { 
      name: 'Logistics Management', 
      status: 'pending', 
      details: 'Plan venue, equipment, and resource allocation',
      tasks: [
        'Select and book venue',
        'Arrange transportation',
        'Coordinate equipment rental'
      ]
    },
    { 
      name: 'Marketing and PR', 
      status: 'pending', 
      details: 'Create promotional strategy and communication plan',
      tasks: [
        'Design marketing materials',
        'Social media campaign',
        'Press release preparation'
      ]
    },
    { 
      name: 'Registration and Ticketing', 
      status: 'pending', 
      details: 'Set up registration process and ticketing system',
      tasks: [
        'Create online registration portal',
        'Define ticket pricing',
        'Set up payment gateway'
      ]
    },
    { 
      name: 'Technical Setup', 
      status: 'pending', 
      details: 'Prepare technical infrastructure and equipment',
      tasks: [
        'Test audio-visual equipment',
        'Set up networking',
        'Prepare backup systems'
      ]
    },
    { 
      name: 'Event Execution', 
      status: 'pending', 
      details: 'Manage and coordinate event day activities',
      tasks: [
        'Final team briefing',
        'Real-time problem solving',
        'Ensure smooth event flow'
      ]
    },
    { 
      name: 'Post-Event Analysis', 
      status: 'pending', 
      details: 'Evaluate event success and gather feedback',
      tasks: [
        'Collect participant feedback',
        'Financial reconciliation',
        'Prepare post-event report'
      ]
    }
  ]);

  const [selectedStage, setSelectedStage] = useState(null);

  const updateStageStatus = (index, status) => {
    const newStages = [...stages];
    newStages[index].status = status;
    setStages(newStages);
  };

  const stageIcons = {
    'Event Planning': <Calendar />,
    'Team Formation': <Users />,
    'Logistics Management': <MapPin />,
    'Marketing and PR': <Megaphone />,
    'Registration and Ticketing': <TicketCheck />,
    'Technical Setup': <Settings />,
    'Event Execution': <Play />,
    'Post-Event Analysis': <BarChart />
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            College Event Management Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Streamline your event organization process
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stages List */}
          <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Event Organization Stages
            </h2>
            <div className="space-y-4">
              {stages.map((stage, index) => (
                <div 
                  key={stage.name}
                  className={`
                    flex items-center p-4 rounded-lg cursor-pointer transition-all
                    ${selectedStage === index 
                      ? 'bg-blue-100 border-2 border-blue-300' 
                      : 'bg-gray-50 hover:bg-gray-100'}
                  `}
                  onClick={() => setSelectedStage(index)}
                >
                  <div className="mr-4 text-blue-600">
                    {stageIcons[stage.name]}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{stage.name}</h3>
                    <div className="flex items-center mt-1">
                      <span 
                        className={`
                          px-2 py-1 rounded-full text-xs font-bold mr-2
                          ${stage.status === 'completed' 
                            ? 'bg-green-200 text-green-800' 
                            : stage.status === 'in-progress'
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-gray-200 text-gray-800'}
                        `}
                      >
                        {stage.status === 'completed' 
                          ? 'Completed' 
                          : stage.status === 'in-progress'
                          ? 'In Progress'
                          : 'Pending'}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStageStatus(index, 'in-progress');
                      }}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <Play size={20} />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStageStatus(index, 'completed');
                      }}
                      className="text-green-500 hover:text-green-600"
                    >
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stage Details */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            {selectedStage !== null ? (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {stages[selectedStage].name} Details
                </h2>
                <p className="text-gray-600 mb-4">
                  {stages[selectedStage].details}
                </p>
                <h3 className="font-semibold mb-2">Key Tasks:</h3>
                <ul className="space-y-2">
                  {stages[selectedStage].tasks.map((task, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-gray-700"
                    >
                      <PlusCircle size={16} className="mr-2 text-blue-500" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Select a stage to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagementDashboard;