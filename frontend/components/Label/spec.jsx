import React from 'react';
import { shallow } from 'enzyme';
import Label from './';

describe('<Label />', () => {
  describe('No data available', () => {
    it('should render nothing', () => {
      const wrapper = shallow(<Label />);

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
      const wrapper = shallow(<Label show={false} energyInfo={energyInfo} />);

      expect(wrapper.html()).toBe(null);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render energyInfo with <Link>', () => {
      const wrapper = shallow(<Label energyInfo={energyInfo} />);

      expect(wrapper.find('Link').exists()).toBe(true);
      expect(wrapper.find('Link').prop('href')).toBe(energyInfo.link);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render energyInfo without <Link>', () => {
      const wrapper = shallow(<Label energyInfo={{ class: 'A' }} />);

      expect(wrapper.find('Link').exists()).toBe(false);
      expect(wrapper).toMatchSnapshot();
    });

    it('should split the "++"', () => {
      const wrapper = shallow(<Label energyInfo={{ class: 'A++' }} />);

      expect(wrapper.text()).toBe('A++');
      expect(wrapper.find('sub').text()).toBe('++');

      expect(wrapper).toMatchSnapshot();
    });
  });
});
