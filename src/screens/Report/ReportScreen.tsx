import React, { useState } from 'react';

import MainHeader from '../../components/MainHeader';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';

function ReportScreen(): React.JSX.Element {
  const [selectedTab, setSelectedTab] = useState('주간');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const year = 2024;
  const month = 10;
  const week = '첫째주';
  const username = '앱설런트';
  const averageSteps = 5032;
  const historyCount = 6;
  const savedTree = 11;
  const topPercentage= '21';

  // 인증 히스토리 내역 예시
  const historyDetails = [
    { content: '제로 웨이스트 매장 방문', count: 1 },
    { content: '텀블러 사용', count: 1 },
    { content: '만보기 목표 달성', count: 4 },
  ];

  const handleTabSwitch = (tab: string) => {
    setSelectedTab(tab);
  };

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  return (
    <View style={styles.container}>
        <MainHeader />
      {/* 주간/월간 버튼 */}
      <View style={styles.switchContainer}>
        <View style={styles.switchBackground}>
          <TouchableOpacity
            style={[styles.switchOption, selectedTab === '주간' && styles.selectedOption]}
            onPress={() => handleTabSwitch('주간')}
          >
            <Text style={[styles.optionText, selectedTab === '주간' && styles.selectedText]}>주간</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switchOption, selectedTab === '월간' && styles.selectedOption]}
            onPress={() => handleTabSwitch('월간')}
          >
            <Text style={[styles.optionText, selectedTab === '월간' && styles.selectedText]}>월간</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 주간 화면 */}
      {selectedTab === '주간' && (
        <View style={styles.content}>
          <Text style={styles.dateText}>{year}년 {month}월 {week}</Text>
          <Text style={styles.usernameText}>
            <Text style={{ color: '#69E6A2' }}>{username}</Text>님의 지난 주{'\n'}성과보고서를 확인해보세요!
          </Text>

          {/* 지난 주 하루 평균 걸음수 */}
          <View style={styles.boxContainer}>
            <View style={styles.shadowBox}>
              <View style={styles.boxContent}>
                <View style={styles.logoAndTitle}>
                  <Image source={require('../../img/Report/averagesteplogo.png')} style={styles.logoImage} />
                  <Text style={styles.boxTitle}>지난 주 하루 평균 걸음수</Text>
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.countNum}>{averageSteps.toLocaleString()}</Text>
                  <Text style={styles.countText}>걸음</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 지난 주 인증 히스토리 (횟수) */}
          <View style={[styles.toggleBoxContainer, isHistoryOpen && styles.historyOpen]}>
            <View style={styles.shadowBox}>
              <View style={styles.historyContent}>
                <View style={styles.logoAndTitle}>
                  <Image source={require('../../img/Report/historylogo.png')} style={styles.logoImage} />
                  <Text style={styles.historyTitle}>지난 주 인증 히스토리 (횟수)</Text>
                </View>
                <View style={styles.historyCountContainer}>
                  <Text style={styles.historyCount}>{historyCount}</Text>
                  <Text style={styles.historyText}>회</Text>
                </View>
              </View>

              {/* 인증 히스토리 토글 버튼 */}
              <View style={styles.toggleButtonContainer}>
                <TouchableOpacity onPress={toggleHistory} style={styles.toggleButton}>
                  <Image
                    source={isHistoryOpen
                      ? require('../../img/Report/arrowup.png')
                      : require('../../img/Report/arrowdown.png')}
                    style={styles.arrowImage}
                  />
                </TouchableOpacity>
                {!isHistoryOpen && (
                  <Text style={styles.toggleText}>인증 히스토리 보기</Text>
                )}
              </View>

              {/* 인증 히스토리 내역 */}
              {isHistoryOpen && (
                <View style={styles.historyDetailsContainer}>
                  {historyDetails.map((detail, index) => (
                    <View key={index} style={styles.historyDetail}>
                      <Text style={styles.historyDetailContent}>{detail.content}</Text>
                      <Text style={styles.historyDetailCount}>{detail.count}회</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>
      )}

      {/* 월간 화면 */}
      {selectedTab === '월간' && (
        <View style={styles.content}>
          <Text style={styles.dateText}>{year}년 {month}월</Text>
          <Text style={styles.usernameText}>
            <Text style={{ color: '#69E6A2' }}>{username}</Text>님의 이번 달{'\n'}성과보고서를 확인해보세요!
          </Text>

          {/* 이번 달 내가 지킨 나무 */}
          <View style={styles.boxContainer}>
            <View style={styles.shadowBox}>
              <View style={styles.boxContent}>
                <View style={styles.logoAndTitle}>
                  <Image source={require('../../img/Report/savetreelogo.png')} style={styles.logoImage} />
                  <Text style={styles.boxTitle}>이번 달 내가 지킨 나무</Text>
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.countNum}>{savedTree.toLocaleString()}</Text>
                  <Text style={styles.countText}>그루</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 이번 달 내가 줄인 탄소 배출량 순위 */}
          <View style={styles.boxContainer}>
            <View style={styles.shadowBox}>
              <View style={styles.boxContent}>
                <View style={styles.logoAndTitle}>
                  <Image source={require('../../img/Report/savecarbonlogo.png')} style={styles.logoImage} />
                  <Text style={styles.boxTitle}>이번 달 내가 줄인 탄소 배출량 순위</Text>
                </View>
                <View style={styles.rankBox}>
                  <Image source={require('../../img/Report/carbonbackground.png')} style={styles.backgroundImage} />
                  <View style={styles.graphContainer}>
                    <Image source={require('../../img/Report/carbongraph.png')} style={styles.graphImage} />
                  </View>
                  <View style={styles.rankAndEarth}>
                    <ImageBackground source={require('../../img/Report/carbonrankbox.png')} style={styles.rankImage}>
                      <Text style={styles.appText}>앱설런트</Text>
                      <Text style={styles.rankText}>상위 {topPercentage}%</Text>
                    </ImageBackground>
                    <Image source={require('../../img/Report/carbonearth.png')} style={styles.earthImage} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  switchContainer: {
    marginTop: 16,
    marginRight: 15,
    alignItems: 'flex-end',
  },
  switchBackground: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: '#69E6A2',
    width: '32%',
    height: 40,
  },
  switchOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 20,
  },
  optionText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
  },
  selectedOption: {
    backgroundColor: '#69E6A2',
  },
  selectedText: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
    marginTop: 7,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#545454',
    marginLeft: 21,
  },
  usernameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#121212',
    marginLeft: 21,
    paddingVertical: 10,
    height:85,
  },
  boxContainer: {
    width: '100%',
    minHeight: 127,
    marginTop: 19,
    paddingHorizontal: 16,
  },
  shadowBox: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  boxContent: {
    justifyContent: 'space-between',
    minHeight: 127,
  },
  logoAndTitle: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  logoImage: {
    width: 45,
    height: 45,
    marginLeft: 20,
    marginTop: 16,
  },
  boxTitle: {
    fontSize: 15,
    color: '#121212',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 16,
  },
  countContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    right: 24,
    alignItems: 'flex-end',
  },
  countNum: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#121212',
  },
  countText: {
    fontSize: 15,
    color: '#C9C9C9',
    marginLeft: 4,
    marginBottom: 8,
  },
  toggleBoxContainer: {
    width: '100%',
    minHeight: 127,
    marginTop: 23,
    paddingHorizontal: 16,
  },
  historyOpen: {
    height: 'auto',
  },
  historyContent: {
    justifyContent: 'space-between',
    minHeight: 127,
  },
  historyTitle: {
    fontSize: 15,
    color: '#121212',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 16,
  },
  historyCountContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    right: 24,
    alignItems: 'flex-end',
  },
  historyCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#121212',
  },
  historyText: {
    fontSize: 15,
    color: '#C9C9C9',
    marginLeft: 4,
    marginBottom: 8,
  },
  toggleButtonContainer: {
    position: 'relative',
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButton: {
    marginLeft: 25,
  },
  arrowImage: {
    width: 10,
    height: 6.18,
  },
  toggleText: {
    fontSize: 13,
    color: '#929292',
    marginLeft: 7,
  },
  historyDetailsContainer: {
    paddingHorizontal: 23,
    marginBottom: 28,
  },
  historyDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 20,
  },
  historyDetailContent: {
    fontSize: 13,
    color: '#929292',
  },
  historyDetailCount: {
    fontSize: 13,
    color: '#929292',
  },
  rankBox: {
    position: 'relative',
    borderRadius: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    resizeMode: 'cover',
    zIndex: 1,
  },
  graphContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 38,
    paddingHorizontal:20,
    zIndex: 2,
  },
  graphImage: {
    width: '100%',
    minHeight: 160,
    resizeMode: 'contain',
  },
  rankAndEarth: {
    position: 'absolute',
    top: 65,
    marginLeft:218,
    width: '100%',
    zIndex: 3,
  },
  rankImage: {
    width: 90,
    height: 70,
  },
  earthImage: {
    marginTop: 27,
    marginLeft:3,
    width: 80,
    height: 55,
  },
  appText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#69E6A2',
    marginTop:10,
    paddingHorizontal:12,
  },
  rankText: {
    fontSize: 11,
    textAlign: 'center',
    color: '#545454',
    marginBottom:10,
  },
});

export default ReportScreen;
