import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from 'axios'

export default function NewTaskButton({ company, setTodoTasks }) {
  let [isOpen, setIsOpen] = useState(false)
  const [task, setTask] = useState({
    name: '',
    description: '',
    links: '',
    contact: '',
    pay: '',
    companyName: company.name,
    freelancerId: '',
    dueDate: '',
    status: 'todo',
  })

  function closeModal() {
    setIsOpen(false)
    handleNewTaskSubmit()
    setTodoTasks(todoTasks => [...todoTasks, task])
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleForm = e => {
    const newTask = { ...task }
    newTask[e.target.id] = e.target.value
    setTask(newTask)
  }

  const handleNewTaskSubmit = () => {
    axios
      .post('http://localhost:4000/task', {
        params: {
          name: task.name,
          description: task.description,
          links: task.links,
          contact: task.contact,
          pay: task.pay,
          companyName: task.companyName,
          freelancerId: '',
          dueDate: task.dueDate,
          status: task.status,
        },
      })
      .then(res => {
        // handle response
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='pt-5'>
      <div className='inset-0 flex items-center justify-center'>
        <a
          onClick={openModal}
          className='rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-yellow-600 text-yellow-600 text-white'
        >
          <span class='absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-yellow-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease'></span>
          <span class='relative text-yellow-600 transition duration-300 group-hover:text-white ease'>
            Publish new task!
          </span>
        </a>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                {/* // name: // description: // links: // contact: // pay: //
                companyId: // companyName: // freelancerId: // dueDate: */}
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900 text-center'
                  >
                    NEW TASK
                  </Dialog.Title>
                  <div className='mt-2 flex flex-col py-2'>
                    <form className='flex flex-col'>
                      <input
                        className='border border-gray-300 p-3 m-1 rounded-lg'
                        type='text'
                        id='name'
                        placeholder='Task Name'
                        onChange={handleForm}
                      />
                      <input
                        className='border border-gray-300 p-3 m-1 rounded-lg'
                        type='text'
                        id='description'
                        placeholder='Task Description'
                        onChange={handleForm}
                      />
                      <input
                        className='border border-gray-300 p-3 m-1 rounded-lg'
                        type='text'
                        id='links'
                        placeholder='Add Project Link'
                        onChange={handleForm}
                      />
                      <input
                        className='border border-gray-300 p-3 m-1 rounded-lg'
                        type='text'
                        id='contact'
                        placeholder='Contact Info'
                        onChange={handleForm}
                      />
                      <input
                        className='border border-gray-300 p-3 m-1 rounded-lg'
                        type='number'
                        id='pay'
                        placeholder='Payment Amount'
                        onChange={handleForm}
                      />
                      <input
                        className='border border-gray-300 p-3 m-1 rounded-lg'
                        type='text'
                        id='dueDate'
                        placeholder='Due Date'
                        onChange={handleForm}
                      />
                    </form>
                  </div>

                  {/* <div className='mt-3 text-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-green-300 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Publish new task!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
