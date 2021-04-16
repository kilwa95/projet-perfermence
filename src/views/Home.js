import React from 'react';
import Menu from '../UI/menu/Menu';
import ArticleTotal from '../UI/article/ArticleTotal';
import Container from '../UI/lib/Container';
import Article from '../UI/article/Article';
import ArticlesSkeleton from '../UI/article/ArticlesSkeleton';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [
				{
					titre: 'Apprendre et Maîtriser Excel de A à Z',
					description: 'Tout savoir sur ce formidable tableur de la suite Office',
					user: {
						name: 'Jean-philibe Parein'
					},
					date: '23/10/1995',
					image: 'https://www.sllcanada.org/sites/default/files/National/CANADA/Image/banner/covid-19.jpg',
					prix: 17.5
				},
				{
					titre: 'Apprendre et Maîtriser Excel de A à Z',
					description: 'Tout savoir sur ce formidable tableur de la suite Office',
					user: {
						name: 'Jean-philibe Parein'
					},
					date: '23/10/1995',
					image: 'https://www.sllcanada.org/sites/default/files/National/CANADA/Image/banner/covid-19.jpg',
					prix: 15.5
				},
				{
					titre: 'Apprendre et Maîtriser Excel de A à Z',
					description: 'Tout savoir sur ce formidable tableur de la suite Office',
					user: {
						name: 'Jean-philibe Parein'
					},
					date: '23/10/1995',
					image: 'https://www.sllcanada.org/sites/default/files/National/CANADA/Image/banner/covid-19.jpg',
					prix: 27.5
				},
				{
					titre: 'Apprendre et Maîtriser Excel de A à Z',
					description: 'Tout savoir sur ce formidable tableur de la suite Office',
					user: {
						name: 'Jean-philibe Parein'
					},
					date: '23/10/1995',
					image: 'https://www.sllcanada.org/sites/default/files/National/CANADA/Image/banner/covid-19.jpg',
					prix: 27.5
				},
				{
					titre: 'Apprendre et Maîtriser Excel de A à Z',
					description: 'Tout savoir sur ce formidable tableur de la suite Office',
					user: {
						name: 'Jean-philibe Parein'
					},
					date: '23/10/1995',
					image: 'https://www.sllcanada.org/sites/default/files/National/CANADA/Image/banner/covid-19.jpg',
					prix: 27.5
				}
			]
		};
	}
	render() {
		let { articles } = this.state;
		return (
			<React.Fragment>
				<Menu />
				<Container>
					<ArticleTotal count={articles.length} />

					{articles ? (
						articles.map((article) => (
							<Article
								title={article.title}
								description={article.description}
								name={article.user.name}
								date={article.date}
								image={article.image}
								prix={article.prix}
							/>
						))
					) : (
						<ArticlesSkeleton />
					)}
				</Container>
			</React.Fragment>
		);
	}
}
export default Home;
