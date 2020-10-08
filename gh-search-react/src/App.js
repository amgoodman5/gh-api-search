/* Import statements */
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import useFetchRepos from './useFetchRepos'
import Repos from './components/Repos'
import RepoPagination from './components/RepoPagination'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

// import Card from '@material-ui/core/Card';

/* Home component */

// he list should be able to sort by GitHub's default sort key (best match) and number of stars and also should be able to filter by language.


// Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.
export default function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { sortKey, repos, stars, lang, loading, error } = useFetchRepos(params, page)
  return (
    <div>
      <RepoPagination page={page} setPage={setPage} />
      <Container>
        {loading && <Spinner animation="grow" />}
        {error && <h1>Error try refreshing again ...</h1>}
        {repos.map((repo, index) => {
          console.log(repo)
        return <Repos key={repo.id} repo={repo}/>
        })}
      </Container>
    </div>
  );
}