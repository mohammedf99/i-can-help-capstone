import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const LanguageDropdown = () => {
    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
      }
      
      function handleMenuClick(e) {
        
      }
    
      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">
            English
          </Menu.Item>
          <Menu.Item key="2">
            Turkish
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
      )

}

export default LanguageDropdown;