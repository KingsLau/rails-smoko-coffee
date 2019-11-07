class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    @average = (@reviews.sum(:stars) / @reviews.count).to_f
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      redirect_to reviews_path
    else
      render :new
    end
  end

  def destroy
    @review = Review.find(:id)
    @review.destroy
    redirect_to reviews_path
  end

  private

  def review_params
    params.require(:review).permit(:name, :email, :comment, :stars)
  end
end
