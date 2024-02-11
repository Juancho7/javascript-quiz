import { Button } from '@mui/material'
import { useQuestionsStore } from './store/questions'

const LIMIT_QUESTIONS = 10

function Start () {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)

  const hanldeClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button onClick={hanldeClick} variant="contained">
      ¡Empezar!
    </Button>
  )
}

export default Start
