

export function ReviewPreview({ review, onRemoveReview }) {
    return <div key={review.id} className="review-details">
        <h4>{review.name}</h4>
        <button  onClick={() => onRemoveReview(review.id)}>×</button>
        <h5 >{review.date}</h5>
        <h4>{review.rating}</h4>
        <p>{review.comment}</p>
    </div>
}