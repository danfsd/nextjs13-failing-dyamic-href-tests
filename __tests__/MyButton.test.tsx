import '@testing-library/jest-dom';
import {render} from '@testing-library/react';

import MyButton from '@/components/MyButton';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('MyButton', () => {
    it('redirects to course detail page using course id', () => {
        const slug = 'test-course-slug';
        const {getByRole} = render(<MyButton slug={slug} />)
        
        expect(getByRole('link')).toHaveAttribute('href', `/course/${slug}`);
    })
})