import { Post } from './post.entity';
import { POST_REPOSITORY } from '../../../constant';

export const postsProviders = [{
    provide: POST_REPOSITORY,
    useValue: Post,
}];