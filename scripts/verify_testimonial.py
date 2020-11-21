import click
from google.cloud import firestore


@click.command()
@click.argument('comment_id')
def verify_testimonial(comment_id):
    db = firestore.Client()
    testimonial = db.collection('testimonials')
    document = testimonial.document(comment_id)
    document.update({'verified': True})


if __name__ == "__main__":
    verify_testimonial()
