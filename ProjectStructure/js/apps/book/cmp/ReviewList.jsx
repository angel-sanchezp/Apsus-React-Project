import { ReviewPreview } from './ReviewPreview.jsx'

export function ReviewList({ reviews,onRemoveReview }) {
    return <div>{reviews.map(review => <ReviewPreview key={review.id} review={review} onRemoveReview={onRemoveReview}></ReviewPreview>)}</div>
}