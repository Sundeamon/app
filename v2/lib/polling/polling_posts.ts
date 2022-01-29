import { inBrowser } from 'lib/where'
import useStore from 'lib/store'
import { nodeIsUpAndRunning } from 'lib/storeUtils'
import type { PostType } from 'lib/types'
import { getLatestPostIndex, getPostById } from 'api/feed'

const INTERVAL = 10 * 1000

export const poll = async (): Promise<void> => {
  const state = useStore.getState()
  // console.log(state)

  const contract: any = state?.contract
  if (!nodeIsUpAndRunning(contract)) {
    setTimeout(poll, 100) // quick retry until contract is available
    return
  }

  const latestPostIndex = await getLatestPostIndex(state.contract)
  // console.log('no. posts', state.latestPostIndexFetched, '->', latestPostIndex)

  if (latestPostIndex < state.latestPostIndexFetched) {
    // console.log('reset posts')
    state.setLatestPostIndexFeched(0)
    state.setPosts([])
  } else if (latestPostIndex > state.latestPostIndexFetched) {
    // console.log(
    //   'new posts exist',
    //   latestPostIndex - state.latestPostIndexFetched
    // )

    const postsPromises: Promise<PostType>[] = []
    for (let i = latestPostIndex; i > state.latestPostIndexFetched; i -= 1) {
      const p = getPostById(contract, i)
      postsPromises.push(p)
    }
    const newPosts = await Promise.all(postsPromises)

    // Set new index & push new posts into possibly existing array
    state.setLatestPostIndexFeched(latestPostIndex)

    // note: it would be quicker and easier to use ES6 spread operator here
    if (state.isPolledDataQueued && state.posts.length) {
      state.postsQueued.map((post) => newPosts.push(post))
      state.setPostsQueued(newPosts)
    } else {
      state.posts.map((post) => newPosts.push(post))
      state.setPosts(newPosts)
    }
  }

  setTimeout(poll, INTERVAL)
} // end of poll()

if (inBrowser) poll() // start your engines */
