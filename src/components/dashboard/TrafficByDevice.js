import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [53, 15, 20,12],
        backgroundColor: [
          "#008FFB",
          "#00E396",
          colors.orange[600],"#FF4560"
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Child Care',
      value: 53,
      icon: LaptopMacIcon,
      color: "#008FFB"
    },
    {
      title: 'Senior Care',
      value: 15,
      icon: TabletIcon,
      color:"#00E396"
    },
    {
      title: 'Special Needs',
      value: 20,
      icon: PhoneIcon,
      color: colors.orange[600]
    }, {
      title: 'Transport',
      value: 12,
      icon: PhoneIcon,
      color: "#FF4560"
    }
  ];

  return (
    <Card {...props} sx={{borderRadius:3, boxShadow:12 }}>
      <CardHeader title="Earning Percentage" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color:color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              {/* <Icon color="action" /> */}
              <Typography
                color="textPrimary"
                variant="body1" noWrap={false}  style={{height:45}}
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
              
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;
