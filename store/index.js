export const state = () => ({
    books: null
})

export const mutations = {
    updataBooks(state, books) {
        state.books = books
    },
    appendBooks(state, books) {
        state.books = state.books.concat(books)
    }
}
