import React from 'react';
import { mount } from 'enzyme';
import Label from './';

// eslint-disable-next-line require-jsdoc, react/prop-types
const MockedLink = props => <div>{props.children}</div>;
jest.mock('@shopgate/pwa-common/components/Link', () => props => <MockedLink {...props} />);

describe('<Label />', () => {
  describe('No data available', () => {
    it('should render nothing', () => {
      const wrapper = mount(<Label />);

      expect(wrapper.html()).toBe(null);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Data available', () => {
    const energyInfo = {
      class: 'B',
      link: 'https://foo.bar',
    };

    it('should render nothing if show=false', () => {
      const wrapper = mount(<Label show={false} energyInfo={energyInfo} />);

      expect(wrapper.html()).toBe(null);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render energyInfo with <Link>', () => {
      const wrapper = mount(<Label energyInfo={energyInfo} />);

      expect(wrapper.find('MockedLink').exists()).toBe(true);
      expect(wrapper.find('MockedLink').prop('href')).toBe(energyInfo.link);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render energyInfo without <Link>', () => {
      const wrapper = mount(<Label energyInfo={{ class: 'A' }} />);

      expect(wrapper.find('MockedLink').exists()).toBe(false);
      expect(wrapper).toMatchSnapshot();
    });

    it('should split the "++"', () => {
      const wrapper = mount(<Label energyInfo={{ class: 'A++' }} />);

      expect(wrapper.text()).toBe('A++');
      expect(wrapper.find('sub').text()).toBe('++');

      expect(wrapper).toMatchSnapshot();
    });
  });
});
